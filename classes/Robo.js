import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import fragmentShader from '../shaders/robo/fragmentShader.glsl'
import vertexShader from '../shaders/robo/vertexShader.glsl'

import MainThreeScene from './MainThreeScene'

export default class Robo {
  constructor () {
    this.loader = new GLTFLoader()
    this.clock = new THREE.Clock()

    this.setMaterial()
  }

  init(scene) {
    this.scene = scene

    this.loader.load('models/book_seeker.glb', (glb) => {
      this.scene.add(glb.scene)
      glb.scene.traverse(o => {
        if(o.isMesh) {
          o.material = this.material
        }
      })
      this.model = glb.scene
      glb.scene.scale.set(0.5, 0.5, 0.5)
      glb.scene.position.y = -0.2
      glb.scene.rotateY(Math.PI)

      this.app = MainThreeScene.app

      this.app.roboAnimation()
    })
  }

  setMaterial() {
    this.material = new THREE.ShaderMaterial(
      {
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
        uniforms: {
          time: { type: 'f', value: 0},
          sky: { type: 't', value: new THREE.TextureLoader().load('images/sky2-min.jpg')}
        }
      }
    ) 
  }

  update() {
    this.elapsedTime = this.clock.getElapsedTime()
    this.material.uniforms.time.value = this.elapsedTime
  }
}
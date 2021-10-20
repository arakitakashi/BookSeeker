import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import config from '../plugins/config'
import RAF from '../plugins/RAF'
import Robo from './Robo'
import App from './App'

class MainThreeScene {
    constructor() {
        this.bind()
    }

    init(container) {
        // RENDERER SETUP
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.debug.checkShaderErrors = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        container.appendChild(this.renderer.domElement)

        // MAIN SCENE INSTANCE
        this.scene = new THREE.Scene()

        // CAMERA AND ORBIT CONTROLLER
        this.camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 100)
        this.camera.position.set(0, 0, -5)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enabled = config.controls
        this.controls.maxDistance = 1500
        this.controls.minDistance = 0

        // SET GUI


        // RENDER LOOP AND WINDOW SIZE UPDATER SETUP
        window.addEventListener("resize", this.resizeCanvas)
        RAF.subscribe('threeSceneUpdate', this.update)

        // SET APP
        this.app = new App()
        this.app.init()

        // SET Robo
        this.robo = new Robo()
        this.robo.init(this.scene)
    }

    update() {
        this.renderer.render(this.scene, this.camera)
        if(this.robo){
          this.robo.update()
        }
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new MainThreeScene()
export default _instance
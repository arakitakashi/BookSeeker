<template lang="pug">
    .wrapper
      .threeScene
        .container(ref='container')
      .wrap
        .section
          h2 1. He is <br>'BOOK SEEKER'
          p He keeps looking for books that will satisfy his thirst for knowledge. He keeps copying them. His desire for knowledge will never be satisfied.
        .section
          h2 2. His mission
          .content
            p He continues his search for humanity's memory.
            img.image(src='images/robo.png')
        .section
          h2 3. Robot Robot Robot
          p For him, continuing to work is not a hardship, but rather a joy.
</template>

<script>
import MainThreeScene from "@/classes/MainThreeScene";

export default {
    name: "ThreeScene",
    props: {
        msg: String,
    },
    mounted() {
        MainThreeScene.init(this.$refs.container);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@font-face {
  font-family: 'Poppins';
  src: url("/fonts/Poppins-Bold.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: 'Poppins';
  src: url("/fonts/Poppins-Regular.woff2") format("woff2");
  font-weight: 400;
}

  .section 
  {
    min-height: 100vh;
    width: 100vw;
    // display: flex;
    // place-items: center;
    // border: 1px solid red;
    color: #fff;
    padding: 60px;
    box-sizing: border-box;

    h2 {
      font-family: 'Poppins';
      font-weight: 700;
      width: 100%;
      display: block;
      font-size: 100px;
    }

    p {
    font-family: 'Poppins';
    font-weight: 400;
    width: 30vw;
    margin-top: 30px;
    display: block;
    font-size: 24px;
    line-height: 2;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;

  }

  .container
  {
    position: fixed;
    left: 0;
    height: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>

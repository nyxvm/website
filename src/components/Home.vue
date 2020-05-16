<template>
  <div>
    <el-row>
      <section class="candy">
        <span></span>
      </section>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    text-align: center;
    padding: 50px 0;
    font-size: 8rem;
  }


  .candy span {
    position: relative;
    font-family: 'Patua One', cursive;
    color: transparent;
    z-index: 0;
  }

  .candy span:before {
    color: #FF63AA;
    background-size: 50px 50px;
    background-color: #FF63AA;
    background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.5) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 75%, transparent);
    background: -o-linear-gradient(transparent, transparent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .candy span:after {
    content: 'nyx is a high performance dynamically scripting language';
    left: 0;
    z-index: -1;
    text-shadow: -6px 6px 0 #D8347F, -5px 5px 0 #D8347F, -4px 4px 0 #D8347F, -3px 3px 0 #D8347F, -2px 2px 0 #D8347F, -1px 1px 0 #D8347F, -2px 5px 15px #000;
  }

</style>

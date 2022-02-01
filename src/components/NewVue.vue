<template>
    <div class="hello">
      <h1 class="bg-black hover:bg-red-500 transition-all">{{msg}}</h1>
      <div class="button-template flex">
        <button>Без Опыта</button><br>
        <button>Без Опыта</button><br>
      </div>
    </div>
</template>

<style lang="less" scoped>
  button{
    padding: 10px;
  }
  button.active{
    background: black;
    color: #fff;
  }
</style>
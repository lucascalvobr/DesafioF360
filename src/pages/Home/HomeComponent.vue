<template>
  <div class="container">
    <div class="navgationMenu">
    <nav>
        <div class="logo">
            <h4>
                MEUAPP
            </h4>
        </div>
        <ul class="navLinks">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Minha Conta</a>
            </li>
        </ul>
        <div class="burgerMenu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
    </nav>
    <div class="content">
      <div class="searchBox">
        <input type="search" class="filtroPesquisa" placeholder="Digite o CNPJ.">
      </div>
      <div class="searchBt">
        <a class="sBt" href="#"></a>
        <i class="fas fa-search"></i>
      </div>
      <div>
        <ul class="listCnpj">
          <li class="cnpj1">
            <span class="n1">CNPJ</span>
            <span class="n2">Fantasia</span>
            <span class="n3">Nome</span>
          </li>
          <li class="cnpj2">
            <span class="n1">CNPJ</span>
            <span class="n2">Fantasia</span>
            <span class="n3">Nome</span>
          </li>
          <li class="cnpj3">
            <span class="n1">CNPJ</span>
            <span class="n2">Fantasia</span>
            <span class="n3">Nome</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    const navSlide = () => {
      const burgerMenu = document.querySelector('.burgerMenu');
      const navLinks = document.querySelector('navLinks');

      burgerMenu.addEventListener('click',()=>{
        nav.classlist.toggle('navActive')
      });
    }
    navSlide();
  },

  data() {

  },

  created () {
        this.$http.get('http://127.0.0.1:7360/cnpj')
    }
  
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: darkgray;
}

body,
input {
    font-family: "Poppins", sans-serif;
}

nav {
display: flex;
align-items: center;
justify-content: space-around;
min-height: 7vh;
background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
}

.logo {
  color: white;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.navLinks {
  display: flex;
  justify-content: space-around;
  width: 30%;
}

.navLinks a {
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
}

.navLinks li {
  list-style: none;
}

.burgerMenu {
  display: none;
}

.burgerMenu div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
}

.searchBox {
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  transition: translate (-50%, -50%);
  background: rgb(242, 242, 243);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}

.searchBt {
  position: absolute;
  top: 10%;
  left: 70%;
  width: 5%;
  transition: translate (-50%, -50%);
  background: #4481eb;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
}

.filtroPesquisa {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  transition: translate (-50%, -50%);
  background: rgb(242, 242, 243);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  outline: none;
}

.listCnpj {
  position: relative;
  width: 600px;
  margin: 100px auto 0;
  padding: 5px;
  box-sizing: border-box;
  margin-right: 42%;
}

.listCnpj li {
  display: flex;
  background: rgba(255, 255, 255, .1);
  padding: 10px 20px;
  color: #fff;
  margin: 5px 0;
  transition: .5s;
  width: 150%;
}

ul li span {
  text-align: center;
}

@media (max-width: 1024px) {
  .navLinks {
  width: 38%
  }
}

@media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .navLinks {
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 7vh;
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: translateX(100%);
  transition: transform 0,5 ease-in;
  }

  .burgerMenu {
    display: block;
    cursor: pointer;
  }
}

.navActive {
  transform: translateX(0%);
}
</style>
import Button from "./components/atoms/Button/Button.component";
import Input from "./components/atoms/Input/Input.component";
import Input2 from "./components/atoms/Input/Input2.component";
import Table from "./components/atoms/Table";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";



const App  = () => {

    return (
        <div>
          <div class="navbar bg-gray-900 text-white py-4">
  <a href="#" class="px-4 hover:text-gray-400">Inicio</a>
  <a href="#" class="px-4 hover:text-gray-400">Proyectos</a>
  <a href="#" class="px-4 hover:text-gray-400">Habilidades</a>
  <a href="#" class="px-4 hover:text-gray-400">Sobre mí</a>
  <a href="#" class="px-4 hover:text-gray-400">Contacto</a>
</div>

<div class="container mx-auto text-center mt-12">
  <h1 class="text-5xl font-bold text-gray-900 mb-8">Perfil de Ángel Chamorro</h1>
  <p class="text-xl text-gray-700 mb-8">Bienvenido a mi perfil. Aquí encontrarás información sobre mis proyectos, habilidades y cómo contactarme.</p>
  <button class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Ver proyectos</button>
</div>

<div class="footer bg-gray-900 text-white text-sm text-center py-4 fixed bottom-0 w-full">
  <a href="https://twitter.com/tu_usuario_de_twitter" class="mx-2 hover:text-gray-400">Twitter</a>
  <a href="https://www.instagram.com/tu_usuario_de_instagram" class="mx-2 hover:text-gray-400">Instagram</a>
  <a href="https://github.com/tu_usuario_de_github" class="mx-2 hover:text-gray-400">GitHub</a>
</div>
        </div>
      )
    }
  
  
  export default App;
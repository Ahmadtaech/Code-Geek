let siteName = 'Fox Code'
let header = document.querySelector('.header')
header.innerHTML = `  
<div>
      <a href="../../" class="logo" style="color: inherit;text-decoration: none;margin: auto">${siteName} <i class="bi bi-code-slash"></i></a>
    </div>

    <div class="minu">
      <div class="open-icon" style="margin-right: 1px">
        <i class="bi bi-eye" id="read" style="color: inherit;margin-left: 10px"></i>
        <i class="bi bi-list" id="open" style="color:inherit;"></i>
      </div>
      <div class="list none" id="list">
        <div class="close-icon" id="close">
          <i class="bi bi-x-lg"></i>
        </div>
        <div class="hidden-list">
          <div>
            <a href="../../" class="list-item">
              <i class="bi bi-house"></i>
              Home
            </a>
            <a href="./pages/contact.html" class="list-item">
              <i class="bi bi-link-45deg"></i>
              Contact
            </a>
            <a href="./pages/about.html" class="list-item">
              <i class="bi bi-info-circle-fill"></i>
              About Us
            </a>
            <a href="https://ask-ahmad.web.app" class="list-item">
              <i class="bi bi-code-slash"></i>
              Developer
            </a>
            <a href="https://ask-ahmad.web.app" class="list-item">
              <i class="bi bi-code"></i>
              View Source 
            </a>
            <br><br><br>

          

          </div>
        </div>
      </div>
    </div>
    <!--<div class="search">
      <a href="" style="color: inherit;">
        <i class="bi bi-search"></i>
      </a>
    </div>-->
`
let list = document.getElementById('list')
let open = document.getElementById('open')
let close = document.getElementById('close')
let main = document.getElementById('main')


open.onclick = function() {
  list.classList.add('block')
  list.classList.add('open')

}

close.onclick = function() {
  list.classList.remove('block')
}

let read = document.getElementById('read')

read.onclick = function(){
  document.body.classList.toggle('read-mode')
}
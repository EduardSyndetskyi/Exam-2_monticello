var linkNav = document.querySelectorAll('[href^="#about"]'),
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#projects"]')
    V = 1; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#news"]'), 
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault(); 
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#contact"]'), 
    V = 1; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#maps"]'),
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}
var linkNav = document.querySelectorAll('[href^="#projects"]'), 
    V = 1; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#maps"]'), 
    V = 1; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}


function newyork(e) {
    e.preventDefault(); 
    let removeFrame = document.getElementById("map");
        removeFrame.remove();
    
        maps.innerHTML =
            `<iframe class="map" id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17107.634865221105!2d-74.01105073474979!3d40.71292758610858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1592554102688!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            
               
            <div class="git">
            <h2 class="title git__title">get in touch</h2>
    
            <div class="row">
                <div class="col col--1-3">
                    <a class="git__link git__link--t-p" href="#maps" onclick="nolan(event)">
                        <i class="fas fa-map-marker-alt "></i> 
                        91 Nolan Extensions Suite 670
                    </a>
                    <a class="git__link" href="tel:+001 356-868-2454">
                        <i class="fas fa-phone-alt"></i>
                        +001 356-868-2454
                    </a>
                    <a class="git__link" href="mailto: gahuy93@gmail.com">
                        <i class="fas fa-inbox"></i>
                        gahuy93@gmail.com
                    </a>
                    <p class="git__text">
                        <i class="far fa-clock"></i>
                        From 07:05AM to 19:30PM</p>
                </div>
                
                <div class="col col--1-3">
                    <form action="" method="POST">
                        <input class="form__field" type="text" name="name" placeholder="Your Name" required value="Mollie Medina">
                        <input class="form__field" type="email" name="email" placeholder="Your Email" required>
    
                        <button class="btn git__btn" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>`
}

function honkkong(e) {
    e.preventDefault(); 
    let removeFrame = document.getElementById("map");
        removeFrame.remove();
    
        maps.innerHTML =
            `<iframe class="map" id="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29528.598350891334!2d114.17622768156738!3d22.313010924076288!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1592605683174!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            
               
            <div class="git">
            <h2 class="title git__title">get in touch</h2>
    
            <div class="row">
                <div class="col col--1-3">
                    <a class="git__link git__link--t-p" href="#maps" onclick="nolan(event)">
                        <i class="fas fa-map-marker-alt "></i> 
                        91 Nolan Extensions Suite 670
                    </a>
                    <a class="git__link" href="tel:+001 356-868-2454">
                        <i class="fas fa-phone-alt"></i>
                        +001 356-868-2454
                    </a>
                    <a class="git__link" href="mailto: gahuy93@gmail.com">
                        <i class="fas fa-inbox"></i>
                        gahuy93@gmail.com
                    </a>
                    <p class="git__text">
                        <i class="far fa-clock"></i>
                        From 07:05AM to 19:30PM</p>
                </div>
                
                <div class="col col--1-3">
                    <form action="" method="POST">
                        <input class="form__field" type="text" name="name" placeholder="Your Name" required value="Mollie Medina">
                        <input class="form__field" type="email" name="email" placeholder="Your Email" required>
    
                        <button class="btn git__btn" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>`
}

function nolan(e) {
    e.preventDefault(); 
    let removeFrame = document.getElementById("map");
        removeFrame.remove();
    
        maps.innerHTML =
            `<iframe class="map" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10856.046742358125!2d-97.56606905892923!3d47.13803711650053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cf7c8b87d84509%3A0x1073ee9978be7f12!2z0J3QvtC70LDQvSwg0KHQtdCy0LXRgNC90LDRjyDQlNCw0LrQvtGC0LAgNTgwNjQsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1592687275264!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            
               
            <div class="git">
            <h2 class="title git__title">get in touch</h2>
    
            <div class="row">
                <div class="col col--1-3">
                    <a class="git__link git__link--t-p" href="#maps" onclick="nolan(event)">
                        <i class="fas fa-map-marker-alt "></i> 
                        91 Nolan Extensions Suite 670
                    </a>
                    <a class="git__link" href="tel:+001 356-868-2454">
                        <i class="fas fa-phone-alt"></i>
                        +001 356-868-2454
                    </a>
                    <a class="git__link" href="mailto: gahuy93@gmail.com">
                        <i class="fas fa-inbox"></i>
                        gahuy93@gmail.com
                    </a>
                    <p class="git__text">
                        <i class="far fa-clock"></i>
                        From 07:05AM to 19:30PM</p>
                </div>
                
                <div class="col col--1-3">
                    <form action="" method="POST">
                        <input class="form__field" type="text" name="name" placeholder="Your Name" required value="Mollie Medina">
                        <input class="form__field" type="email" name="email" placeholder="Your Email" required>
    
                        <button class="btn git__btn" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>`
}




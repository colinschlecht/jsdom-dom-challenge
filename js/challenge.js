document.addEventListener("DOMContentLoaded", function(){
    let pauseButton = document.getElementById('pause')
    let minusButton = document.getElementById('minus')
    let plusButton = document.getElementById('plus')
    let submitButton = document.getElementById('submit')
    let commentArea = document.getElementById('list')
    let form = document.getElementById('comment-form')
    let ul = document.createElement('ul')
    commentArea.appendChild(ul)
    
    function incrementCount(){
        let counter = document.getElementById("counter").textContent * 1
        if (pauseButton.innerText === "pause"){
            document.getElementById('counter').textContent = counter + 1
        }
    }
    
    function pauseOrResume(){
        if (pauseButton.innerText === "pause"){
            pauseButton.innerText = "resume"
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
        } else {
            pauseButton.innerText = "pause"
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
        }
    }
    
    function minus(){
        let counter = document.getElementById("counter").textContent * 1
        document.getElementById('counter').textContent = counter - 1
    }
    
    function plus(){
        let counter = document.getElementById("counter").textContent * 1
        document.getElementById('counter').textContent = counter + 1
    }
    
    const heartButton = document.getElementById('heart')

    function heart(){
        let second = document.getElementById("counter").textContent * 1
        const text = document.createElement('text')
        if (document.getElementById(counter.innerText) === null) {
            let li = document.createElement('li')
            li.id = second
            li.data = 1
            li.innerHTML = `${second} has been liked ${li.data} times`
            ul.appendChild(li)
        } else {
            let li = document.getElementById(counter.innerText)
            li.data++;
            li.innerText = `${second} has been liked ${li.data} times`
        }
    }
    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let input = e.target[0].value
        let li = document.createElement('li')
        li.innerText = input
        ul.appendChild(li)

        input.innerText = ""
        console.log("Hi")
    })
    

    pauseButton.addEventListener('click', pauseOrResume)
    minusButton.addEventListener('click', minus)
    plusButton.addEventListener('click', plus)
    heartButton.addEventListener('click', heart)
    
    
    setInterval(incrementCount, 1000);
})




(() => { 
    let toDoListArray = [];
    const form = document.querySelector(".form"); 
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList"); 
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      let itemId = String(Date.now());
      let toDoItem = input.value;
      addItemToDOM(itemId , toDoItem);
      addItemToArray(itemId, toDoItem);
      input.value = '';
    });
    
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return       
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
    
    function addItemToDOM(itemId, toDoItem) {    
      const li = document.createElement('li')
      li.setAttribute("data-id", itemId);
      li.innerText = toDoItem
      ul.appendChild(li);
    }
    
    function addItemToArray(itemId, toDoItem) {
      toDoListArray.push({ itemId, toDoItem});
      console.log(toDoListArray)
    }
    
    function removeItemFromDOM(id) {
      var li = document.querySelector('[data-id="' + id + '"]');
      ul.removeChild(li);
    }
    
    function removeItemFromArray(id) {
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
    
    const changeBgBtn = document.getElementById('change-bg-btn');

    changeBgBtn.addEventListener('click', function() {
      const body = document.querySelector('body');
      const colors = ['#FFC107', '#E91E63', '#4CAF50', '#2196F3', '#607D8B', '#FF9800', '#D81B60', '#8BC34A', '#03A9F4', '#546E7A', '#FFE082', '#F06292', '#81C784', '#64B5F6', '#B0BEC5'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    });
    
  })();
(function(){
    'use strict';
  
    class Component {
      toggleСlass(node, className) {
        return  node.classList.toggle(className);
      }    
    }
    
    class Menu extends Component {
      
      constructor(settings) {
        super();
        this.menuNode = settings.menuNode;
      }
      
      toggleMenuState(className) {      
        
        if (typeof className !== 'string' || className.length === 0){
          return super.printError('you did not give the class name for the toggleState function');
        } 
        
        return super.toggleСlass(this.menuNode, className);
      }
    }
  
    let menuNodeChanged = document.querySelector('body');
    
    let demoMenu = new Menu ({
      menuNode: menuNodeChanged
    });
    
    function callMenuToggle() {
      demoMenu.toggleMenuState('menu_activated');
    }
    
    menuNodeChanged.querySelector('.menu_toggle').addEventListener('click', callMenuToggle);
  })();
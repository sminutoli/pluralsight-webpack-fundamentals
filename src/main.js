console.log('main loaded!');

const mainModule = { 
  value: 'Main module loaded',
  render(document){
    var main = document.createElement('main');
    main.innerHTML = '<section>Apa no es react pero se parece!</section>'
    return main;
  }
};

export default mainModule;
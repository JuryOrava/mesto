export default class Section {
    constructor({ data, renderer }, containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer; //это функция, которая отвечает за создание и отрисовку данных на странице
      this._container = document.querySelector(containerSelector);
    }
  
    //принимает DOM-элемент и добавляет его в контейнер.
    addItem(element) {
      this._container.append(element);
    }

    prependItem(element) {
        this._container.prepend(element);
      }

    //отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer
    renderItems() { 
      this._renderedItems.forEach(item => {
        this._renderer(item);
      });
    }
  }
  
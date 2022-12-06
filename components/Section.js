export default class Section {
    constructor({ renderer }, containerSelector) {
      this._renderer = renderer;
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
    renderItems(items, userId) { 
      items.forEach(item => {
        this._renderer(item, userId);
      });
    }
  }
  
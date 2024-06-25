const { Activity, Repository } = require("../scripts/models");

// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

let repository;
let id;

describe("clase Repository", () => {
  beforeEach(() => {
    repository = new Repository();
  });

  it("Deberia ser una instancia de la clase Repository", () => {
    expect(repository instanceof Repository).toBe(true);
  });

  it("Deberia tener un metodo para agregar un elemento a la lista", () => {
    expect(typeof repository.createActivity).toBe("function");
  });

  it("Deberia tener un metodo para eliminar un elemento de la lista", () => {
    expect(typeof repository.deleteActivity).toBe("function");
  });

  it("Deberia tener un metodo para mostrar todas las actividades", () => {
    expect(typeof repository.getAllActivities).toBe("function");
  });

  it("El metodo createActivity, deberia poder agregar un elemento a la lista", () => {
    const expectedActivity = {
      title: "leer",
      description: "Leer es bueno para la memoria",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-N8NYBwyKsXx-eJZuvTT6fJs-6r7AC1WAWS_yKcJiZw&s",
    };
    repository.createActivity(
      expectedActivity.title,
      expectedActivity.description,
      expectedActivity.imgUrl
    );
    const newActivity = new Activity(
      (id = 1),
      expectedActivity.title,
      expectedActivity.description,
      expectedActivity.imgUrl
    );
    expect(repository.getAllActivities()).toEqual([newActivity]);
  });

  it("El metodo deleteActivity, deberia poder eliminar la tarjeta seleccionada", () => {
    const expectedActivity = {
      title: "leer",
      description: "Leer es bueno para la memoria",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-N8NYBwyKsXx-eJZuvTT6fJs-6r7AC1WAWS_yKcJiZw&s",
    };
    repository.createActivity(
      expectedActivity.title,
      expectedActivity.description,
      expectedActivity.imgUrl
    );
    const newActivity = new Activity(
      (id = 1),
      expectedActivity.title,
      expectedActivity.description,
      expectedActivity.imgUrl
    );
    repository.deleteActivity(newActivity.id);
    expect(repository.getAllActivities()).toEqual([]);
  });

  it("El metodo getAllActivity, deberia retornar la lista de actividades,", () => {
    const expectedActivity1 = {
      title: "leer",
      description: "Leer es bueno para la memoria",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-N8NYBwyKsXx-eJZuvTT6fJs-6r7AC1WAWS_yKcJiZw&s",
    };

    const expectedActivity2 = {
      title: "yoga",
      description: "Es bueno para la salud",
      imgUrl:
        "https://media.glamour.mx/photos/642c5305347cb2132003b34a/16:9/w_2560%2Cc_limit/yoga_y_estiramientos_diferencias.jpg",
    };
    repository.createActivity(
      expectedActivity1.title,
      expectedActivity1.description,
      expectedActivity1.imgUrl
    );
    repository.createActivity(
      expectedActivity2.title,
      expectedActivity2.description,
      expectedActivity2.imgUrl
    );

    const newActivity1 = new Activity(
      (id = 1),
      expectedActivity1.title,
      expectedActivity1.description,
      expectedActivity1.imgUrl
    );

    const newActivity2 = new Activity(
      (id = 2),
      expectedActivity2.title,
      expectedActivity2.description,
      expectedActivity2.imgUrl
    );

    expect(repository.getAllActivities()).toEqual([newActivity1, newActivity2]);
  });
});

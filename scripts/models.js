class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgURL = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  //un metodo que le permita retornar todas las actividades

  getAllActivities() {
    return this.activities;
  }
  //un metodo que reciba datos de una actividad, cree una actividad nueva y la guarde en su array
  createActivity(title, description, imgUrl) {
    this.id++;
    const activity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(activity);
  }
  //un metodo que le permita filtrar las actividades
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
    return this.activities;
  }
}

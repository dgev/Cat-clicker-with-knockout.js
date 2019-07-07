var cats = [{
        image: "https://live.staticflickr.com/7411/12657513705_7e3a833353_k.jpg",
        name: "First",
        count: 0,
    },
    {
        image: "https://us.123rf.com/450wm/5second/5second1606/5second160600195/57712279-pequeño-gato-hermoso-en-un-sofá-de-color-gris.jpg?ver=6",
        name: "Second",
        count: 0
    },
    {
        image: "https://us.123rf.com/450wm/5second/5second1609/5second160900032/62048554-beautiful-little-cat-on-a-grey-sofa.jpg?ver=6",
        name: "Third",
        count: 0
    },
    {
        image: "https://us.123rf.com/450wm/5second/5second1609/5second160900078/62047859-beautiful-little-cat-on-female-hands-outdoors.jpg?ver=6",
        name: "Fourth",
        count: 0
    },
    {
        image: "https://s1.1zoom.me/big0/670/Cats_4Kittens_Glance_505828.jpg",
        name: "Fifth",
        count: 0
    }
];

var Model = function (data) {
    this.name = ko.observable(data.name);
    this.count = ko.observable(data.count);
    this.image = ko.observable(data.image);
    this.catView = ko.observable(false);

    this.title = ko.computed(function () {
        if (this.count() < 21)
            return "newborn";
        else if (this.count() < 51)
            return "infant";
        else
            return "teen";
    }, this);

}

var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);
    cats.forEach(element => {
        self.catList.push(new Model(element));
    });

    this.cat = ko.observable(this.catList()[0]);

    this.counter = function () {
        self.cat().count(self.cat().count() + 1);
    };
    this.showCat = function (currentCat) {
        self.cat(currentCat);
        self.cat().catView(true);
    }
}

ko.applyBindings(new ViewModel());



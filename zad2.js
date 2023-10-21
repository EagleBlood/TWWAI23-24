function sumPublicationYears(books) {
    var sum = 0;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        sum += book.publicationYear;
    }
    return sum;
}
var books = [
    {
        title: "Pan Tadeusz",
        author: "Adam Mickiewicz",
        publicationYear: 1834
    },
    {
        title: "Ogniem i mieczem",
        author: "Henryk Sienkiewicz",
        publicationYear: 1884
    },
    {
        title: "Chłopi",
        author: "Władysław Reymont",
        publicationYear: 1904
    }
];
console.log("Zadanie 2\n\r");
console.log("Suma lat wydania: " + sumPublicationYears(books) + "\n\n\r");

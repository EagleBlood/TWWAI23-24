interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

function sumPublicationYears(books: Book[]): number {
    let sum = 0;
    for (const book of books) {
        sum += book.publicationYear;
    }
    return sum;
}

const books: Book[] = [
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
    }];

console.log("Zadanie 2\n\r");
console.log("Suma lat wydania: " + sumPublicationYears(books) + "\n\n\r");
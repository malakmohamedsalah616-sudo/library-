//books data
const books = [
    {
        id: 1,
        title: "الأسود يليق بك",
        author: "أحلام مستغانمي",
        rating: 4,
        status: "finished",
            cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1351004560i/16081961.jpg',
    },
    {
        id: 2,
        title: "ذاكرة الجسد",
        author: "أحلام مستغانمي",
        rating: 4,
        status: "reading",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1291756684i/2501458.jpg'
    },
    {
        id: 3,
        title: "عزازيل",
        author: "يوسف زيدان",
        rating: 5,
        status: "finished",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1239159794i/3554772.jpg'
    },
    {
        id: 4,
        title: "أرض زيكولا",
        author: "عمرو عبد الحميد",
        rating: 4,
        status: "reading",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1441287700i/9753375.jpg'
    },
    {
        id: 5,
        title: "يوتوبيا",
        author: "أحمد خالد توفيق",
        rating: 4,
        status: "finished",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1415641762i/23524550.jpg'
    },
    {
        id: 6,
        title: "تراب الماس",
        author: "أحمد مراد",
        rating: 4,
        status: "want",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1265525892i/7704143.jpg'
    },
    {
        id: 7,
        title: "ساق البامبو",
        author: "سعود السنعوسي",
        rating: 5,
        status: "finished",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1336743682i/13637412.jpg'
    },
    {
        id: 8,
        title: "الطنطورية",
        author: "رضوى عاشور",
        rating: 5,
        status: "want",
        cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1314481218i/8239301.jpg'
    }
];
///get element
const grid        = document.getElementById("books-grid");
const searchInput = document.getElementById("search-input");
const booksCount  = document.getElementById("books-count");
const emptyState  = document.getElementById("empty-state");
const themeToggle = document.getElementById("theme-toggle");
///
function renderBooks(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        emptyState.style.display = "block";
        booksCount.textContent = "0";
        return;
    }

    emptyState.style.display = "none";
    booksCount.textContent = list.length;

    list.forEach(book => {
        const stars = "★".repeat(book.rating) + "☆".repeat(5 - book.rating);

        const statusText = {
            reading:  "بقرأه",
            finished: "خلصته",
            want:     "عايز أقرأه"
        }[book.status];

        const card = `
            <article class="book-card">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}" loading="lazy">
                    <span class="book-status ${book.status}">${statusText}</span>
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating">${stars}</div>
                </div>
            </article>
        `;

        grid.insertAdjacentHTML("beforeend", card);
    });
}
/// search
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();

    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    renderBooks(filtered);
});

renderBooks(books);
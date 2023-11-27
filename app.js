const express = require('express') 
const bodyParser = require('body-parser') 
const books = [{
		bookName: "Higher Engineering Mathematics",
		bookAuthor: "B.S. Grewal",
		bookPages: 1238,
		bookPrice: 824,
		bookState: "Available"
	},
	{
		bookName: "DATA STRUCTURES AND ALGORITHMS MADE EASY",
		bookAuthor: "NARASIMHA KARUMANCHI",
		bookPages: 453,
		bookPrice: 599,
		bookState: "Available"
	},
	{ 
		bookName: "PROGRAMMING WITH JAVA", 
		bookAuthor: "E Balagurusamy", 
		bookPages: 600, 
		bookPrice: 613, 
		bookState: "Available"
	}, 
	{ 
		bookName: "Core Python Programming", 
		bookAuthor: "Dr. R. Nageswara Rao", 
		bookPages: 792, 
		bookPrice: 775, 
		bookState: "Available"
	},
	{ 
		bookName: "Let us C++", 
		bookAuthor: "YASHAVANT KANETKAR", 
		bookPages: 362, 
		bookPrice: 365, 
		bookState: "Available"
	},
	{ 
		bookName: "DATA STRUCTURES AND ALGORITHMIC THINKING WITH PYTHON", 
		bookAuthor: "NARASIMHA KARUMANCHI", 
		bookPages: 438, 
		bookPrice: 641, 
		bookState: "Available"
	},
	{ 
		bookName: "OPERATING SYSTEMS INTERNALS AND DESIGN PRINCIPLES", 
		bookAuthor: "William Stallings", 
		bookPages: 800, 
		bookPrice: 669, 
		bookState: "Available"
	},
	
] 

const app = express() 

app.set('view engine', 'ejs') 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
	extended: true
})) 

app.get("/", function (req, res) { 
	res.render("home", { 
		data: books 
	}) 
}) 

app.post("/", (req, res) => { 
	const inputBookName = req.body.bookName 
	const inputBookAuthor = req.body.bookAuthor 
	const inputBookPages = req.body.bookPages 
	const inputBookPrice = req.body.bookPrice 

	books.push({ 
		bookName: inputBookName, 
		bookAuthor: inputBookAuthor, 
		bookPages: inputBookPages, 
		bookPrice: inputBookPrice, 
		bookState: "Available"
	}) 

	res.render("home", { 
		data: books 
	}) 
}) 

app.post('/issue', (req, res) => { 
	var requestedBookName = req.body.bookName; 
	books.forEach(book => { 
		if (book.bookName == requestedBookName) { 
			book.bookState = "Issued"; 
		} 
	}) 
	res.render("home", { 
		data: books 
	}) 
}) 

app.post('/return', (req, res) => { 
	var requestedBookName = req.body.bookName; 
	books.forEach(book => { 
		if (book.bookName == requestedBookName) { 
			book.bookState = "Available"; 
		} 
	}) 
	res.render("home", { 
		data: books 
	}) 
}) 

app.post('/delete', (req, res) => { 
	var requestedBookName = req.body.bookName; 
	var j = 0; 
	books.forEach(book => { 
		j = j + 1; 
		if (book.bookName == requestedBookName) { 
			books.splice((j - 1), 1) 
		} 
	}) 
	res.render("home", { 
		data: books 
	}) 
}) 

app.listen(3000, (req, res) => { 
	console.log("App is running on port 3000") 
})

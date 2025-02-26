const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value)

	if(e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = ''
		}, 10)
		
		randomSelect()
	}

})

// Function to create Tag
function createTags(input) {
	const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

	tagsEl.innerHTML = ''

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag')
		tagEl.innerText = tag
		tagsEl.appendChild(tagEl)
	})
}

// Function for Random Select
function randomSelect() {
	const times = 30

	const interval = setInterval(() => {
		const randomTag = pickRandomTag()

		highlightTag(randomTag)

		setTimeout(() => {
			unHighlightTag(randomTag)
		}, 100);
	},100);

	setTimeout(() => {
		clearInterval(interval)

		setTimeout(() => {
			const randomTag = pickRandomTag()

			highlightTag(randomTag)
		}, 100)

	}, times * 100);
}

// Function for Pick Random Tag
function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

// Function for highlightTag
function highlightTag(tag) {
	tag.classList.add('highlight')
}

// Function for unHighlightTag
function unHighlightTag(tag) {
	tag.classList.remove('highlight')
}


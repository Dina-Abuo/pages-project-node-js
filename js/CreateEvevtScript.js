
let myseletDays = document.getElementById('numDays');
myseletDays.addEventListener('change', function () {
    let optionValue = this.value;
    console.log(this.value);
    for (let i = 1; i <= optionValue; i++) {
        let mydivDate = document.getElementById('itemData')
        mydivDate.innerHTML += `
            <input type="date" name="bdate${i}" class="inputs" />
                    <i class="fas fa-calendar-alt"></i>
                        <div class="item">
                        <p>Ticket Price</p>
                        <input type="text" name="Price" class="inputs" />
                    </div>
                    <div class="item">
                        <p> Description Event </p>
                        <textarea name="description" id="description" cols="98" rows="5"></textarea>
                    </div> `
    }
});

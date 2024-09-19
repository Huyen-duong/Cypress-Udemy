describe(' JSON OBJECT', ()=>{
    it('json object, array and mix', () =>{
        //object:
        const sampleObject= {"key":"value", "key1": "value1"}
        const sampleArray = ["item1", "item2", "item3"]
        const arrayOfObject= [{"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]
        const typeOfData= {"string": "Traycy", "number": 3}


        const mix= {
            "FirstName" : "Huyen",
            "LastName": "Duong",
            "Age" : 26,
            "Student": [
                {
                    "Name": "Christ",
                    "Age": 4
                },
                {
                    "Name": "David",
                    "Age": 5,
                }
            ]
        }
        console.log("sampleObject " + sampleObject.key1)
        console.log("sampleArray " + sampleArray[2])
        console.log("arrayOfObject " +arrayOfObject[1].key2)
        console.log("typeOfData " + typeOfData.string)
        console.log("mix object " + mix.FirstName)
        console.log("mix arrayobject" + mix.Student[0].Name)

        const lastNameOfSecond= mix.Student[1].Name


    })


})
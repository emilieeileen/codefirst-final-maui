var string1="I am interested in"
var string2=" snorkeling."
var string7="I am not interested in"

function functionsnorkel(){
    alert('The best snorkeling in on Molokini. This partially submerged volcanic crater is a great place to swim with tropical fish and even spot some turtles! The only way to get here is by boat so stop by the marina to book a tour.')
    var snorkeling = confirm('Do you still want to go snorkeling in Maui?')
            
            if(snorkeling == true){
                alert('Great! I hope you like Molokini!')
                console.log(string1+string2)
            }
            else{
                alert("That's fine. I hope you find another activity to do in Maui!")
                console.log(string7.concat(string2))
            }
}

function functionluau(){
    alert("The best luau on Maui is at the Old Lahina Luau. Enjoy the tuna poke or Kālua pork as you sit on the beach and watch traditional hula dancing.")
    var string3=" going to a luau."
    var luau = confirm('Do you still want to go to a luau in Maui?')
            
    if(luau == true){
        alert('Great! I hope you like the luau!')
        console.log(string1+string3)
    }
    else{
        alert("That's fine. I hope you find another activity to do in Maui!")
        console.log(string7.concat(string3))
    }
}
 

function functionsunrise(){
    alert("Nothing beats watching the sunrise at the peak of this massive dormat volcano. Legend says this peak is where the demi-god Maui lassoed the sun. To reach this peak you might need to have an early start and a good gps. Consider taking a tour where you can cycle down the mountain after you watch the sunrise!")
    var string4=" watching the sunrise at Haeleakala Volcano."
    var sunrise = confirm('Do you still want to watch the sunrise at Haeleakala?')
            
    if(sunrise == true){
        alert('Great! I hope you enjoy the sunrise!')
        console.log(string1+string4)
    }
    else{
        alert("That's fine. I hope you find another activity to do in Maui!")
        console.log(string7.concat(string4))
    }
}

function functionhana(){
    alert("This road trip is a great way to see the eastern side of the island. If you are feelling adventureous, keep going after Hana and take the unpaved road back to Kula. Here you will get to whole southeast side of the island to yourself. Make sure to stop into the Kaupo general store to get a nice cold drink!")
    var string5=" driving the road to Hana."
    var hana = confirm('Do you still want to go to drive the Road to Hana?')
            
    if(hana == true){
        alert('Great! I hope you like the drive')
        console.log(string1+string5)
    }
    else{
        alert("That's fine. I hope you find another activity to do in Maui!")
        console.log(string7.concat(string5))
    }
}

function functionIao(){
    alert("Check out The Needle, a famous landmark in the West Maui Mountains. Did you know this all used to be a one big volcano?")
    var string6=" hiking the Iao Valley."
    var iao = confirm('Do you still want to go to hike in the Iao Valley?')
            
    if(iao == true){
        alert('Great! I hope you enjoy the hike! Remember to bring water!')
        console.log(string1+string6)
    }
    else{
        alert("That's fine. I hope you find another activity to do in Maui!")
        console.log(string7.concat(string6))
    }
}

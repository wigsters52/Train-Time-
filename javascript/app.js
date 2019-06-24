const firebaseConfig = {
  apiKey: 'AIzaSyBTmOlMVbNvUFu6FsFkGru_QZkVkY_uel4',
  authDomain: 'employeedb-69a1a.firebaseapp.com',
  databaseURL: 'https://employeedb-69a1a.firebaseio.com',
  projectId: 'employeedb-69a1a',
  storageBucket: 'employeedb-69a1a.appspot.com',
  messagingSenderId: '361349654146',
  appId: '1:361349654146:web:ea10b80b69933017'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Create a variable to reference the database
const database = firebase.database()

$('#submitButton').on('click', function (event) {
  event.PreventDefault()
  let trainName = $('trainName').val().trim()
  let destination = $('destination').val().trim()
  let firstTrainTime = $('firstTrainTime').val().trim()
  let frequency = $('frequency').val().trim()

  var newTrain = {
    name: trainName,
    destination: destination,
    time: firstTrainTime,
    frequency: frequency

  }
  datebase.ref().push(newTrain)

  $('trainName').val('')
  $('destination').val('')
  $('firstTrainTime').val('')
  $('frequency').val('')
})

database.ref().on('child_added', function (childSnapshot) {
  let trainName = childSnapshot.val().name
  let destination = childSnapshot.val().destination
  let firstTrainTime = childSnapshot.val().time
  let frequency = childSnapshot.val().frequency

  // still need to do the math

  var newRow = $('<tr>').append(
    $('<td>').text(trainName),
    $('<td>').text(destination),
    $('<td>').text(frequency),
    $('<td>').text(nextArrival),
    $('<td>').text(minutesAway)
  )

  // Append the new row to the table
  $('#tableBody > tbody').append(newRow)

})

// calculate when the next train will arrive.

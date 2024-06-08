//our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData){
      const response = await fetch('/api/new-meetup', {
         method: 'POST',
         body:JSON.stringify(enteredMeetupData),
         headers: {
            'Content-Type': 'application/json'
         }
      });

      if(!response.ok){
         throw new Error('Failed to create meetup')
      }

      const data = await response.json();

      console.log(enteredMeetupData);

      console.log(data);
    }
     return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;
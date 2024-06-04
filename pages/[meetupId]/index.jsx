import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetails(){

    return (
      <>
        <MeetupDetail
          image="https://th.bing.com/th/id/R.171469519d57e63bf0cb18c3257797e3?rik=Rs1FirAHPKiyXA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFruit-HD-Wallpapers-03484.jpg&ehk=7L0lkg9TPcRVu%2bjsZhWvhNw1CZRgILylaYrEFKMa6n4%3d&risl=&pid=ImgRaw&r=0"
          title="A first Meetup"
          address="Some Street 5, Some City"
          description="The meetup description"
        />
        </>
    );
}


export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context){

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  //fetch data for a single meetup
  return{
    props: {
      meetupData: {
         image: "https://th.bing.com/th/id/R.171469519d57e63bf0cb18c3257797e3?rik=Rs1FirAHPKiyXA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFruit-HD-Wallpapers-03484.jpg&ehk=7L0lkg9TPcRVu%2bjsZhWvhNw1CZRgILylaYrEFKMa6n4%3d&risl=&pid=ImgRaw&r=0",
          id: meetupId,
         title: "A first Meetup",
          address: "Some Street 5, Some City",
          description:"The meetup description",
      }
    }
  }
}

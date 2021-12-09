import React,{useState} from 'react'
import List from './components/List'
import Form from './components/Form'

export interface State {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const App: React.FC = () => {

  const [people,setPeople] = useState<State['people']>([
    {
      name: "Nuruzzaman",
      age: 36,
      url: 'https://www.google.com/search?q=girl+image&rlz=1C1CHBD_enBD921BD921&sxsrf=AOaemvJ_QaZN4dld68v56BnP3s0qvtJEWA:1638639143704&tbm=isch&source=iu&ictx=1&fir=4MKkqiEy-MScnM%252CvG9N1fA9-6_7KM%252C_%253ByE27s2GTzgzdYM%252CPFw1U2f_XfQyBM%252C_%253BRrzQOgsIoRY9mM%252Coi9Q0ipza26y4M%252C_%253BbgvmehIa9VZuPM%252CEPr-q9XY1mHs6M%252C_%253B4t6ZK1m2caxS7M%252CQpzyBf8pXPcSRM%252C_%253Bnb5kHEStT33zcM%252CNsu9jWuP_p0fVM%252C_%253BNarwuaMbXqg5oM%252CS-WWaIx78myimM%252C_%253Blkvcjw_4aR4tIM%252Ce29m-t1HWfiYKM%252C_%253BVEbOz0lUmBxKwM%252CXGgrBkCNJPISEM%252C_%253Bh1TGR-Bttw0XcM%252C45qbspJ_zIAn1M%252C_%253BfzV4-KISR8fjGM%252CEPr-q9XY1mHs6M%252C_%253BtYazYnMD42KXhM%252CX5KhQZHx16C5gM%252C_%253BjGcR3M9EfKcvWM%252CEPr-q9XY1mHs6M%252C_%253BKj6FC-rHtI3wfM%252CO5Hl3skfnfyLrM%252C_%253B6NVoxYMMcAByHM%252CvG9N1fA9-6_7KM%252C_%253BOtMZq9UfTAS7YM%252CNdzlPhWmDYrJzM%252C_%253BLoqzOSRuce3JMM%252CyDK0l73vsaNx6M%252C_%253BgPOYu5qeRNvHDM%252CEPr-q9XY1mHs6M%252C_%253BOCEn-loMpifi8M%252C1xuqBOTo71J3pM%252C_%253BhfkNTAaZuGo3RM%252CI3qkwW4hHL30JM%252C_%253B2NCYvdTq7jx7uM%252CQpzyBf8pXPcSRM%252C_%253BPRI5XbU9XDnsSM%252CTdnaDyyOnVsnAM%252C_&vet=1&usg=AI4_-kRhH0zwVuG4kIRMRE5_ktY-ufXVLw&sa=X&ved=2ahUKEwje2szA1sr0AhVOSWwGHQXLA_EQ9QF6BAgfEAE#imgrc=yE27s2GTzgzdYM',
      note: 'Allergic to staying same team'
    },
    {
      name: "Kamrul Islam",
      age: 32,
      url: 'https://www.pexels.com/photo/fashion-person-sunglasses-woman-8872885/',
      note: 'Everything is fair in love and war'
    }
  ])


  return(
    <div>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  )
}
export default App

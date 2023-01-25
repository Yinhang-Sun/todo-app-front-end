const person = {
    name: 'Yinhang',
    address: {
        line1: 'Bake Street',
        city: 'Los Angels',
        country: 'USA', 
    }, 
    profiles: ['twitter', 'linkedin', 'instagram'], 
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        ) 
    },
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
        </>
        
    )
}
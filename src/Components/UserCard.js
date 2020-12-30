import React from "react"
import { Card,CardBody } from "reactstrap";

const UserCard = ({user}) =>{

return (
<Card className="text-center mt-3 mb-4">
<img src={user.avatar_url} className="img-thumbnail"/>
<CardBody>
<div className="text-danger">
{user.name}
</div>
<div className="text-dark">
{user.location}
</div>
<div className="text-dark"> Availabele for Hiring ->
    {user.hireable ? 'YES': 'NO'}
</div>
<div className="text-dark"> Followers -> 
   {user.followers}
</div>
<div className="text-dark"> Bio -> 
   {user.bio}
</div>

</CardBody>
</Card>

)

}

export default UserCard;
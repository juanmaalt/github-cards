import React from 'react';

const CardList = (props) =>(
    <div>
      {props.profs.map(prof => <Card key={prof.id} {...prof}/>)}
    </div>
  );
  
  class Card extends React.Component{
    render(){
      const userProfile = this.props;
      return(
        <div className="github-profile">
          <img alt="profile pic" src={userProfile.avatar_url}/>
          <div className="info">  
            <div className="name">{userProfile.name}</div>
            <a className="login" href={userProfile.html_url}>@{userProfile.login}</a>
            <div className="bio">{userProfile.bio}</div>
          </div>
        </div>
      )
    }
  }

  export default CardList;
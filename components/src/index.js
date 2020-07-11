//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

//Create react component
const App = () => { 
    return (
        <div className="ui container comments">
        <ApprovalCard>
           <CommentDetails 
                author="Sam" 
                timeAgo="Today at 6 PM"
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetails 
                author="Alex" 
                timeAgo="Today at 10 AM" 
                content="I liked the writing"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetails 
                author="Jane" 
                timeAgo="Today at 8 PM" 
                content="I liked the content"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        </div>
    );
};

//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));
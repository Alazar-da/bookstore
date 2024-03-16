import React from 'react';
import BookEdit from './bookedit/page';

type BookEditProps = {
    objectArray: string[]; // Replace `YourItemType` with the type of your objects
  };
  const IntermediateComponent: React.FC<BookEditProps> = ({ objectArray}) => {

    return <div>
          <BookEdit objectArray={objectArray} />
      </div>;
  };

export default IntermediateComponent;
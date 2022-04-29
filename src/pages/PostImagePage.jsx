import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { Button } from 'reactstrap';
// import UserPageHeader from ''

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container d-flex flex-column align-items-center my-height">
       {/* <UserPageHeader/>  */}
      <div className='m-5 ' {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Fotoğraf yüklemek için sürükle veya tıkla</p>
      </div>
        <div className='m-5 p-5'>
            
            <textarea name="comments" cols="40" rows="6" placeholder = "Eklemek istediklerin..."></textarea> 
            </div>
        <div>
                <Button className="container--postbutton bg-dark text-light">Gönder</Button>
        </div>
    </div>
  );
}

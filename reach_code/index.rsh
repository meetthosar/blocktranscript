'reach 0.1';

export const main = Reach.App(() => {
  const Transcript = Object({
    name : Bytes(30),
    code : Bytes(10),
    status : Bool,
    found : Bool,
  });

  const functions = {
    sendTranscript : Fun([Transcript],Null),
    isServing : Fun([Bool],Null)
  }

  const U = Participant('University', {
    ...functions,
    universityCode: UInt,
    price : UInt,
    deadline : UInt,
    requestTranscript : Fun([UInt, UInt], Transcript),
  });
  const R = Participant('Requester', {
    
    ...functions,
    university : UInt,
    studentCode :UInt,
    transcript : Transcript
  });

  init();

  U.only(() => {
    const universityCode = declassify(interact.universityCode);
    const price = declassify(interact.price);
    const deadline = declassify(interact.deadline);
  });
  

  U.publish(universityCode, price,  deadline);
  commit();
  
  
  R.only(() => {
    const university = declassify(interact.university);
    const studentCode = declassify(interact.studentCode);
  });
  
  R.publish(studentCode, university).pay(price);  
  commit();

  each([U, R], () => {
    interact.isServing(true);
  });

  U.only(() => {
    const transcript = declassify(interact.requestTranscript(universityCode, studentCode));
  });

  U.publish(transcript);
  // commit();

  if(transcript === false){
    each([U, R], () => {
      interact.setStudentFound(transcript);
    });
  }else{
    transfer(price).to(U);
    each([U, R], () => {
      interact.sendTranscript(transcript);
    });
  } 
  commit();
  

  
  // write your program here
  exit();
});

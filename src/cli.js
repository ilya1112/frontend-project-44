import readlineSync from 'readline-sync';

const rlQuestion = () => {
  const answer = readlineSync.question('May I have your name? ');
  return answer;
};

export default rlQuestion;

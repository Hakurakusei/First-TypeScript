export const Practice1 = () => {
  const clacTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    clacTotalFee(1000);
  };
  return (
    <div>
      <p>練習：引数の型指定</p>
      <button onClick={onClickPractice}>練習１</button>
    </div>
  );
};

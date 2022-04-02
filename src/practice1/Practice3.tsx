export const Practice3 = () => {
  const clacTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = clacTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習：変数の型指定</p>
      <button onClick={onClickPractice}>練習3</button>
    </div>
  );
};

interface GameStatusProps {
  messages: string[];
}

export const GameStatus = ({ messages }: GameStatusProps) => {
  return (
    <div>
      {messages.map((msg) => (
        <h2 key={msg}>{msg}</h2>
      ))}
    </div>
  );
};

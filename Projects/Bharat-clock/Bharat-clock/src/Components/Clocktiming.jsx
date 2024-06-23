
export const Clocktiming = () => {
    let time= new Date();
  return (
    <div>
        <p>This is the current time : {time.toLocaleDateString()}-{" "}{time.toLocaleTimeString()}</p>
    </div>
  )
}

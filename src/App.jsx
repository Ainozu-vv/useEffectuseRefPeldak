import { useState } from "react";

import BackToTop from "./components/BackToTop";
import SideBar from "./components/SideBar";
import ChatInput from "./components/ChatInput";
import Toast from "./components/Toast";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import AutoFocusInput from "./components/AutoFocusInput";
import MeasureBox from "./components/MeasureBox";
import PrevValue from "./components/PrevValue";
import Stopwatch from "./components/Stopwatch";
import AutoScrollChat from "./components/AutoScrollChat";

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <>
      {false && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          sollicitudin feugiat dapibus. Curabitur quis velit quam. Donec nec
          dignissim erat. Sed elit orci, consequat ac nunc sed, venenatis
          fermentum tortor. Phasellus imperdiet elementum risus, at fermentum
          eros sagittis ut. Vivamus ullamcorper risus mauris, non fermentum
          nulla viverra at. Sed blandit pharetra purus, at porttitor orci mollis
          eget. Donec pretium sollicitudin justo, quis mollis diam mattis non.
          Donec vitae imperdiet ex. Aenean quis tincidunt mauris, sed varius
          dolor. Maecenas tempor, ipsum vitae rhoncus convallis, leo nisi
          sollicitudin nulla, ut vestibulum nunc nisl ut ligula. In porttitor
          lacus nisl, sed accumsan magna tincidunt ut. Cras eget orci elit. Nunc
          tortor purus, congue ut convallis non, porta vel eros. Sed vel justo
          volutpat mi porttitor maximus et sit amet magna. Pellentesque sed
          semper justo, a dapibus ex. Maecenas viverra, urna ut aliquam dapibus,
          sapien nisl volutpat ipsum, vitae mattis elit mi in sem. Nam sit amet
          ante et lorem molestie laoreet. In quis ligula quis mi lacinia
          bibendum ut vel turpis. Suspendisse vestibulum eget felis a porttitor.
          Pellentesque vel interdum mi. Donec congue convallis risus, vitae
          aliquam libero mollis quis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nulla congue
          porttitor elementum. Proin non enim et urna faucibus sollicitudin a
          quis leo. Phasellus consequat odio vel sem cursus, id eleifend sapien
          aliquet. In vestibulum, nibh ut sagittis euismod, lorem velit
          imperdiet lectus, sit amet rhoncus tellus nulla ut ante. Donec quis
          consequat neque, posuere volutpat massa. Suspendisse fringilla ut
          ipsum id consectetur. Fusce egestas sem eu lectus tempus viverra. In
          luctus tempus bibendum. Donec id massa lectus. In hac habitasse platea
          dictumst. Nulla facilisis tellus ut arcu fermentum feugiat. Sed quis
          orci placerat orci mattis sagittis a ut nisi. Nullam rhoncus lacus
          vulputate, suscipit mauris id, semper nibh. Donec lobortis volutpat
          consequat. Ut lacinia feugiat dolor a viverra. Aliquam erat volutpat.
          Suspendisse et laoreet enim, eget laoreet justo. Sed faucibus
          efficitur augue, convallis convallis magna auctor sit amet. Donec
          pulvinar tellus id vulputate bibendum. Quisque dapibus convallis
          mauris, vel tristique libero. Maecenas risus nulla, finibus non risus
          eget, laoreet maximus nulla. Morbi a pulvinar nisl. Proin euismod eu
          elit nec elementum. Sed eleifend metus vitae viverra consectetur. Sed
          hendrerit sagittis interdum. Vivamus sagittis orci quis orci
          pellentesque cursus. Sed ut laoreet massa. Nunc lacinia quam at nisi
          laoreet fermentum. Nunc luctus, ipsum vitae mattis pharetra, felis
          lectus laoreet lorem, in interdum magna metus eget massa. Sed dapibus
          convallis posuere. Morbi porta, elit non cursus molestie, nunc lectus
          pellentesque nisl, et auctor nisl mauris sed justo. Vivamus eleifend,
          erat non lobortis porttitor, massa velit pharetra felis, non finibus
          lectus quam ac sapien. In aliquet, massa et ultrices consequat, neque
          lacus scelerisque nisl, vel porta elit ligula at libero. Praesent quis
          ante fringilla, vehicula risus sit amet, maximus arcu. Quisque dui
          neque, porta a tempus vitae, pulvinar aliquet neque. Nam ac lectus in
          mauris ultricies accumsan at non massa. Nunc commodo non est nec
          imperdiet. Duis vel pulvinar tellus, eget consectetur mi. Mauris
          pellentesque sapien aliquam nibh tempus, a fringilla lectus rutrum.
          Nunc placerat scelerisque enim. Maecenas rhoncus ipsum sed pulvinar
          tincidunt. Mauris vel consequat ex, eget scelerisque felis. Fusce et
          iaculis risus, non commodo risus. Etiam tincidunt tortor ante, vel
          eleifend sem ultrices sit amet. Nunc venenatis egestas erat, vel
          finibus magna efficitur ut. Duis condimentum non elit ac vulputate.
          Suspendisse luctus nisl nulla, vel luctus lorem mattis sollicitudin.
          Duis facilisis pretium erat, at suscipit ex accumsan a. Aenean
          ultricies, ex in hendrerit fringilla, nisi nisi fringilla diam,
          imperdiet facilisis nulla orci a eros. Aliquam a luctus diam. Donec
          efficitur ligula sed ligula ultricies, eget sollicitudin justo
          venenatis. Morbi hendrerit, metus et commodo posuere, orci nisi
          dapibus dolor, in vestibulum ipsum nunc quis ex. Maecenas tincidunt
          erat ut est efficitur, vel maximus massa sollicitudin. Ut condimentum
          mauris erat, vel fermentum sapien porta eu. Mauris et magna in mauris
          efficitur volutpat. Duis luctus dui viverra nulla lobortis volutpat.
          Etiam sit amet eros ac risus imperdiet eleifend eu id nisi. Morbi
          vestibulum eros vitae fringilla dignissim. Nullam ullamcorper eu massa
          eu commodo. Vestibulum eget urna rutrum, fermentum neque sit amet,
          dapibus urna. Praesent in augue viverra, blandit justo venenatis,
          rutrum libero. Nullam efficitur gravida scelerisque. Mauris ac finibus
          mauris. Duis finibus sapien eu elit tempor, pulvinar porta odio
          tristique. Sed sagittis, lacus at rutrum fermentum, diam velit cursus
          dolor, quis consectetur ligula sem eget metus. Vestibulum a gravida
          velit. Aenean a tristique justo. Nulla ac orci varius, scelerisque
          nisl non, rutrum orci. Proin fermentum quam nunc, a lobortis dui
          dignissim vitae. Donec non magna rhoncus, bibendum purus sed,
          ultricies orci. Etiam cursus, purus in consequat eleifend, tortor urna
          lacinia ipsum, eu blandit ante arcu sit amet erat. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum at ornare erat. Generated 8 paragraphs, 803
          words, 5423 bytes of Lorem Ipsum
        </div>
      )}
      <BackToTop />
      <div style={{ background: "red" }}>
        <SideBar />
      </div>
      <ChatInput />

      <div>
        <button onClick={() => setSuccess(true)}>Sikeres gomb!</button>
        {success && <Toast setSuccess={setSuccess} success={success} />}
      </div>
      <Modal onClose={()=>console.log('Modal closed')}/>
        <LoginForm/>
        <AutoFocusInput/>
        <MeasureBox/>
        <PrevValue/>
        <Stopwatch/>
        <AutoScrollChat/>
    </>
  );
}

export default App;

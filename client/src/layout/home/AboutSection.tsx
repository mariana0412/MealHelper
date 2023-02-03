import {FC, forwardRef} from "react";

export const AboutSection: FC<any> = forwardRef((props, ref: any): any => {
  return (
    <section className={"about-section"} ref={ref}>
      <h2 className={"section-heading"}>About MealHelper</h2>
      <div className={"section-content"}>
        <div className={"image-container"}>
          <img src={`${process.env.PUBLIC_URL}/about.png`} alt={"About MealHelper"} />
        </div>
        <div className={"about-text m-5"}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Pharetra vel turpis nunc eget lorem dolor. Morbi non arcu risus quis varius quam. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Massa massa ultricies mi quis hendrerit. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Morbi enim nunc faucibus a.</p>
          <p>Et netus et malesuada fames. Nunc sed id semper risus in hendrerit. Non diam phasellus vestibulum lorem sed risus. Nam at lectus urna duis convallis convallis tellus id interdum. Ut tortor pretium viverra suspendisse potenti nullam ac. Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet volutpat consequat mauris nunc congue. In fermentum et sollicitudin ac orci phasellus egestas. Dui accumsan sit amet nulla facilisi morbi tempus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Sed tempus urna et pharetra pharetra massa. Sed nisi lacus sed viverra tellus in hac habitasse platea.</p>
          <p>Ornare arcu dui vivamus arcu felis bibendum ut. Odio aenean sed adipiscing diam donec adipiscing tristique. Ac auctor augue mauris augue neque. Turpis tincidunt id aliquet risus feugiat in. Aliquet enim tortor at auctor urna nunc. Sed augue lacus viverra vitae congue eu consequat. Auctor elit sed vulputate mi sit amet. Pellentesque sit amet porttitor eget dolor. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Id aliquet risus feugiat in ante metus dictum at tempor. Sagittis orci a scelerisque purus semper. Mollis aliquam ut porttitor leo. Ac turpis egestas sed tempus urna et.</p>
        </div>
      </div>
    </section>
  );
})
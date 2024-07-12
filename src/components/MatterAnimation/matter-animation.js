import Matter from "matter-js";

export const renderCanvas = () => {
  const animationContainer = document.querySelector(
    ".matter-animation-wrapper"
  ); // Your animation root container. Do it position releative and overflow hidden

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Runner = Matter.Runner;
  const params = {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  };

  const canvasSize = {
    width: animationContainer?.clientWidth || window.innerWidth,
    height: animationContainer?.clientHeight || window.innerHeight,
  };

  const engine = Engine.create({});

  const render = Render.create({
    element: animationContainer,
    engine: engine,
    options: {
      ...canvasSize,
      background: "transparent",
      wireframes: true,
    },
  });
  const floor = Bodies.rectangle(
    canvasSize.width / 2,
    canvasSize.height,
    canvasSize.width,
    50,
    params
  );
  const wall1 = Bodies.rectangle(
    0,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const wall2 = Bodies.rectangle(
    canvasSize.width,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const top = Bodies.rectangle(
    canvasSize.width / 2,
    0,
    canvasSize.width,
    50,
    params
  );
  const wordElements = document.querySelectorAll(".animation-item");
  const wordBodies = [...wordElements].map((elemRef) => {
    const width = elemRef.offsetWidth;
    const height = elemRef.offsetHeight;

    return {
      body: Matter.Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
        render: {
          fillStyle: "transparent",
        },
      }),
      elem: elemRef,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - width / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
  });

  const mouse = Matter.Mouse.create(animationContainer);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  World.add(engine.world, [
    floor,
    ...wordBodies.map((box) => box.body),
    wall1,
    wall2,
    top,
    mouseConstraint,
  ]);
  render.mouse = mouse;
  Runner.run(engine);
  Render.run(render);

  (function rerender() {
    wordBodies.forEach((element) => {
      element.render();
    });
    Matter.Engine.update(engine);
    requestAnimationFrame(rerender);
  })();
};

export function animationStart() {
  renderCanvas();
}

interface RealmProps {
  width: number;
  pressBtn: () => void;
  open: boolean;
  t: (k: string) => string;
}

const HudRealm = ({ width, open, pressBtn, t }: RealmProps) => {
  if (!open) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        border: "1px solid red",
        width: "calc(100% - 120px)",
        background: "transparent",
      }}
    >
      <span
        style={{
          width: `${width}%`,
          background: "red",
          border: "1px solid black",
          transition: "width 0.5s ease-in",
          height: 32,
        }}
      />
      <div
        onClick={pressBtn}
        style={{
          color: "white",
        }}
      >
        {t("damage")}
      </div>
    </div>
  );
};

export default HudRealm;

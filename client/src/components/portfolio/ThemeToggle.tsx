import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-9 items-center gap-2">
        <div className="h-6 w-11 rounded-full bg-muted" />
      </div>
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="theme-mode"
        checked={dark}
        onCheckedChange={(c) => setTheme(c ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Label htmlFor="theme-mode" className="cursor-pointer text-sm text-muted-foreground">
        Dark
      </Label>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Drawer } from 'vaul';

export default function Page() {
  return (
    <div className="bg-zinc-100">
      <section className="h-screen bg-zinc-100 flex flex-col items-center justify-center">
        <Default />
      </section>
      <section className="h-screen bg-zinc-200 flex flex-col items-center justify-center">
        <Default />
      </section>
      <section className="h-screen bg-zinc-300 flex flex-col items-center justify-center">
        <Default />
      </section>
    </div>
  );
}

function Default() {
  const [parent, setParent] = useState<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col items-center gap-10">
      <Drawer.Root>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bg-zinc-100 inset-x-0 rounded-t-[10px] bottom-0 h-[56%] p-6">
            <Drawer.Title>Unstyled drawer for React.</Drawer.Title>
            <button
              onClick={() => {
                alert('Clicked');
              }}
              type="button"
            >
              Click me
            </button>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}

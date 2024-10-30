import { Logo } from '@/components/Logo'
import Intro from './Intro.mdx'
import Background from '@/components/Background'
import { Avatar, Button, Card, Code, Text } from '@radix-ui/themes'
import Link from 'next/link'
import {
  BikeIcon,
  CalendarIcon,
  DatabaseIcon,
  GithubIcon,
  MedalIcon,
  TreesIcon,
  VoteIcon
} from 'lucide-react'

interface Dataset {
  id: number
  key: string
  title: string
  description: string
  categories: string
}

const getIcon = (key: string) => {
  switch (key) {
    case 'buchungen-klosterhof':
      return <CalendarIcon className="size-5" />
    case 'fahrradabstellanlagen':
    case 'lastenraeder-herrenberg':
      return <BikeIcon className="size-5" />
    case 'gemeinderatswahl':
      return <VoteIcon className="size-5" />
    case 'geo-baumkataster':
      return <TreesIcon className="size-5" />
    case 'hbg-vereinsregister':
      return <MedalIcon className="size-5" />
    default:
      return <DatabaseIcon className="size-5" />
  }
}

export default async function Home() {
  const orgRequest = await fetch('https://munigrid.de/api/v0/org/hbg')
  const result = (await orgRequest.json()) as { datasets: Dataset[] }

  return (
    <div>
      {/* Navbar */}
      <div className="py-4 border-b border-gray-6">
        <div className="flex items-center gap-6 justify-between container mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-24">
              <Logo />
            </div>
            <h1 className="font-bold text-3">Open Data Portal</h1>
          </div>
          <div className="flex gap-6">
            <Button asChild variant="soft">
              <Link href="https://www.munigrid.de/api/docs" target="_blank">
                API
              </Link>
            </Button>
            <Button asChild variant="soft">
              <Link href="https://github.com/jens-ox/open-data-herrenberg" target="_blank">
                <GithubIcon className="size-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative flex flex-col justify-end" style={{ height: 500 }}>
        <Background />
        <div className="container mx-auto pb-8">
          <div className="prose prose-invert px-4">
            <Intro />
          </div>
        </div>
      </div>

      {/* Datasets */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="font-bold text-5">Datensätze</h2>
        <p className="text-gray-10">
          Neue Datensätze werden kontinuierlich hinzugefügt. Falls Ihnen ein bestimmter Datensatz
          fehlt, können Sie sich unter{' '}
          <a className="text-accent-10 underline" href="mailto:data@herrenbergd.de">
            data@herrenberg.de
          </a>{' '}
          an uns wenden.
        </p>

        <div className="grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 pt-8">
          {result.datasets.map((dataset) => (
            <Card asChild key={`dataset-${dataset.id}`}>
              <Link href={`https://munigrid.de/hbg/dataset/${dataset.id}`}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar fallback={getIcon(dataset.key)} />
                    <div className="flex flex-col">
                      <Text>{dataset.title}</Text>
                      <div>
                        <Code size="1" color="gray">
                          {dataset.key}
                        </Code>
                      </div>
                    </div>
                  </div>
                  <Text as="div" size="2" color="gray">
                    {dataset.description}
                  </Text>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

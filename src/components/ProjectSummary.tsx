import { Container, Divider, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface ProjectSummaryProps {
  image: string;
  title: string;
  subtitles: string[];
  summary: string[];
}

export function ProjectSummary({ image, title, subtitles, summary }: ProjectSummaryProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isMobile) {
    return (
      <Flex flexDirection='row' align='start' justify='stretch' m={5} p={5} px = {5}>
        <div>
          <Heading as='h2' fontSize={'sm'} mb={2}>{title}</Heading>
          {subtitles.map((subtitle) => (
            <Heading as='h3' fontSize={'xs'} fontWeight='normal' mb={2}>{subtitle}</Heading>
          ))}
          {summary.map((paragraph) => (
            <Text color='gray.600' fontSize={'xs'}>{paragraph}</Text>
          ))}
          <Divider borderColor='#EBD64C' border= '1px' w={'150px'} mt='40px'/>
        </div>
      </Flex>
    )
  }

  return (
    <Flex flexDirection='row' align='start' justify='stretch' m={5} p={5} px = {[5, 20]}>
      <Image src={image} mr={[5, 20]} width={[50, 330]} height={[100,180]} />
      <div>
        <Heading as='h2' fontSize={['sm', '2xl']} mb={2}>{title}</Heading>
        {subtitles.map((subtitle) => (
          <Heading as='h3' fontSize={['xs', '2xl']} fontWeight='normal' mb={2}>{subtitle}</Heading>
        ))}
        {summary.map((paragraph) => (
          <Text color='gray.600' fontSize={['xs', '2xl']}>{paragraph}</Text>
        ))}
        
        <Divider borderColor='#EBD64C' border= '1px' w={['150px','728px']} mt='40px'/>
      </div>
    </Flex>
  )
}

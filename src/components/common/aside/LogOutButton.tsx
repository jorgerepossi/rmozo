import {Button} from '@/components/ui/button'
import {Power} from 'lucide-react'

const LogOutButton = () => {
  return (
    <div className={' flex items-center justify-center h-10'}>
      <Button className={'bg-rm'}> <Power size={20} /></Button>
    </div>
  )
}
export default LogOutButton;
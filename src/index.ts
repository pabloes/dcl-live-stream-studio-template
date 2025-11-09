import {} from '@dcl/sdk/math'
import { engine, executeTask } from '@dcl/sdk/ecs'
import { GltfNodeModifiers, GltfContainer, Transform} from '@dcl/sdk/ecs'
import {Vector3,} from '@dcl/ecs-math'
import { timers } from '@dcl-sdk/utils'

export function main() {
    executeTask(async ()=>{
      /*  await sleep(1000)
        const myEntity = engine.getEntityOrNullByName("Bush_02.glb")
        if(!myEntity) return;

        GltfNodeModifiers.create(
          myEntity,
          {
            modifiers: [{
              path: '',
              material: {
                material: {
                  $case: 'pbr', pbr: {
					albedoColor: Color4.Red(),
                  }
                }
              }
            }]
          }
        )*/
    })

    
}

export const sleep = async (delay: number): Promise<any> =>
  await new Promise((resolve) => timers.setTimeout(resolve as any, delay))
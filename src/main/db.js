import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import { app, remote } from 'electron'

const APP = process.type === 'renderer' ? remote.app : app

if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) { // 如果不存在路径
    fs.mkdirpSync(STORE_PATH) // 就创建
  }
}
const STORE_PATH = APP.getPath('userData') 

// logbook 
const logbookAdapter = new FileSync(path.join(STORE_PATH, '/logbook.json')) 

const LogDB = Datastore(logbookAdapter) 

if (!LogDB.has('logbook').value()) { // 先判断该值存不存在
    LogDB.set('logbook', []).write() // 不存在就创建
}

// cache
const cacheAdapter = new FileSync(path.join(STORE_PATH, '/cache.json')) 

const cacheDB = Datastore(cacheAdapter) 

if (!cacheDB.has('cache').value()) { // 先判断该值存不存在
    cacheDB.set('cache', []).write() // 不存在就创建
}

export {LogDB , cacheDB} 
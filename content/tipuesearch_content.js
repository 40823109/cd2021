var tipuesearch = {"pages": [{'title': 'About', 'text': '40823109 \n 倉儲 :\xa0 cd2021倉儲 \n 網站 :\xa0 cd2021網站 \n YT\xa0 \xa0:\xa0 YT網站 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'SSH 設定', 'text': '(1) 在 home 將之前建立的key ， .ssh資料夾複製過來。 \n \n (2) 開啟 putty，將 github.com load下來。 \n \n (3) 找到 SSH 下的 Auth 將key路徑改成剛剛複製過來的key，然後回到剛剛的介面按下save。 \n \n (4) \n 修改 start 增加框框中的兩行指令。 \n \n (4) 確認 tmp/cd2021/.git 中 ， config修改如下。 \n \n (5) 重新啟動後即可完成SSH設定。 \n', 'tags': '', 'url': 'SSH 設定.html'}, {'title': 'set website', 'text': '(1) 進入到\xa0 https://github.com/mdecourse/cmstemplate \xa0按下 Use this template 。 \n \n (2) 輸入倉儲名稱 cd2021 ，建立倉儲。 \n \n (3) 進入到 tmp 下 ， 輸入 git clone --recurse-submodules 倉儲連結 .git\xa0 \n \n (4) 進到 tmp/cd2021/cmsimde/ 輸入，python wsgi.py ，可執行網站。 \n \n (5) 開起瀏覽器，輸入\xa0 https://localhost:9443 \xa0，即可編輯網站。 \n \n \n', 'tags': '', 'url': 'set website.html'}, {'title': 'leo無法啟動', 'text': '(1) 輸入 leo 指令跳出無限迴圈 \n \n (2) 解決方法 : \n 在 home 目錄下建立一個 .leo 資料夾 ，並建立一個 .leoID 文件檔後， 重新啟動即可成功。 \n \n \n \n', 'tags': '', 'url': 'leo無法啟動.html'}, {'title': 'W2', 'text': '討論分工部分 : 40823109繪製草圖與3D圖 \n 40823112製作程式模擬 \n YT影片 : \n \n', 'tags': '', 'url': 'W2.html'}, {'title': '草圖繪製', 'text': '1. 手繪手稿 \n \xa0 \n 2. 發現齒輪無法傳動後，更正的手稿。 \n \n 3.最終確定的手稿。 \n \n', 'tags': '', 'url': '草圖繪製.html'}, {'title': '3D圖繪製', 'text': '3D圖檔 :\xa0 \n 達爾文船零件圖檔 \n 組合圖 : \n \n 零件圖 : \n 1. 船身 \n \n 2. 輪 \n \n 3. 輸入軸支撐 \n \n 4. 輸入軸 \n \n 5. 傳動齒輪1支撐 \n \n 6. 傳動齒輪1 \n \n 7. 傳動齒輪軸2支撐 \n \n 8. 傳動齒輪軸2 \n \n 9. 惰輪支撐 \n \n 10. 惰輪 \n \n 11. 輪軸芯 \n \n', 'tags': '', 'url': '3D圖繪製.html'}, {'title': 'W3', 'text': '完成品 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': '3D爆炸圖與工作圖', 'text': '圖檔 :\xa0 工作圖檔 \n 3D爆炸圖 : \n \n 2D工作圖 : \n 船體 \n \n 齒輪及傳動件 : \n \n 輪 : \n \n', 'tags': '', 'url': '3D爆炸圖與工作圖.html'}, {'title': '傳動設計修改', 'text': '修改齒輪尺數與樣式變更 \n Q :\xa0 模擬後發現輸出輪與左右齒輪傳動不穩，速度會產生簡諧運動， \n A : 增加齒數與更改齒型從而能更加的穩定運轉。 \n (修改前) \n \n (修改後成品) \n \n \n', 'tags': '', 'url': '傳動設計修改.html'}, {'title': 'W4', 'text': '第一階段報告 \n \n 影片 :\xa0 \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'W5', 'text': "Stage2 開始執行，討論後決定以第一組的專題主題繼續進行下去。 \n 組別 : stage2-ag1 \n 組員 : 40823145、40823108、40823112、40823109 \n 為了讓模型能夠按照我們的意思做動，嘗試著編寫Lua程式並以方向鍵進行控制。 \n 下方為第一次測試的程式 \n Lua程式: \n threadFunction=function()\n    -- put your actuation code here\n while sim.getSimulationState()~=sim.simulation_advancing_abouttostop do\n    -- Read the keyboard messages (make sure the focus is on the main window, scene view):\n        message,auxiliaryData=sim.getSimulatorMessage()\n        while message~=-1 do\n            if (message==sim.message_keypress) then\nif (auxiliaryData[1]==2007) then\n                -- up key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    if Shape4 == 1\n        then sim.setJointPosition(joint_1, 1000, orientation)\n    if Shape7 == 1\n        then sim.setJointPosition(joint_2, 1000, orientation)\n    end\n        sim.setJointTargetVelocity(joint,velocity)\n    end\n        joint_1=sim.getObjectHandle('joint_1')\n        joint_2=sim.getObjectHandle('joint_2')\n        Shape4=sim.getObjectHandle('Shape4')\n        Shape7=sim.getObjectHandle('Shape7')\n        velocity=0\n        torque=0\n        Shape4 = 0\n        Shape7 = 0\nend \n 因部分語法有誤，日後待除錯。 \n", 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': "這週我們試著使機器人可以用方向鍵來控制，但程式修改後還是有錯誤。 \n 第二次Lua程式測試: \n function sysCall_init()\n    -- do some initialization here\n    left_front_handle= sim.getObjectHandle('left_front')\n    left_back_handle= sim.getObjectHandle('left_back')\n    right_back_handle= sim.getObjectHandle('right_back')\n    right_front_handle= sim.getObjectHandle('right_front')\n    \n    joint_1_handle= sim.getObjectHandle('joint_1')\n    \n    joint_2_handle= sim.getObjectHandle('joint_2')\n    MaxVel=10\n    leftvelocity=0\n    rightvelocity=0\n    dVel=0.5;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                \n                \n                sim.setJointForce(joint_1_handle, 1000)\n                \n                sim.setJointForce(joint_2_handle, 1000)\n                break\n            else\n            --sim.setJointForce(left_front_handle, 10000)\n            sim.setJointForce(left_back_handle, 10000)\n            sim.setJointForce(right_back_handle, 10000)\n            --sim.setJointForce(right_front_handle, 10000)\n            \n            sim.setJointForce(joint_1_handle, 0)\n            \n            sim.setJointForce(joint_2_handle, 0)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend\n\nfunction sysCall_sensing()\n    -- put your sensing code here\nend\n\nfunction sysCall_cleanup()\n    -- do some clean-up here\nend\n\n-- See the user manual or the available code snippets for additional callback functions and details \n 第二次更新後，還是無法順利控制，將於下週改進。 \n", 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': "經過前兩週的測試，這週我們成功使機器人可以用方向鍵進行操控。 \n 模擬圖 : \n \n 第三次Lua程式 (成功) \n function sysCall_init() \n    left_front_handle= sim.getObjectHandle('left_m')\n    left_back_handle= sim.getObjectHandle('left_m')\n    right_back_handle= sim.getObjectHandle('right_m')\n    right_front_handle= sim.getObjectHandle('right_m')\n    MaxVel=2\n    leftvelocity=0\n    rightvelocity=0\n    dVel=0.5;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                break\n            else\n                --sim.setJointForce(left_front_handle, 10000)\n                sim.setJointForce(left_back_handle, 10000)\n                sim.setJointForce(right_back_handle, 10000)\n                --sim.setJointForce(right_front_handle, 10000)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend  \n 已成功使用方向鍵控制模型，下週將會加入視覺傳感器與力傳感器，讓模型在遇到物體時可以自動避開。 \n", 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '我們加入了力傳感器、視覺傳感器，讓模型在碰觸障礙物時，可以自行避開並選擇路徑上無障礙物之路線進行移動。 \n 模擬圖 :\xa0 \n \n 模型Lua: \n function sysCall_init()\n    \n    \nend\n\nfunction sysCall_actuation()\n    \nend\n\nfunction sysCall_sensing()\n    \nend\n\nfunction sysCall_cleanup()\n    \nend\n\n\n\nfunction sysCall_afterDelete(inData)\n    for key,value in pairs(inData.objectHandles) do\n        print("Object with handle "..key.." was deleted")\n    end\n    \nend\n\nfunction sysCall_afterCreate(inData)\n    for key,value in pairs(inData.objectHandles) do\n        print("Object with handle "..value.." was created")\n    end\nend\n--]]\nfunction speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    \n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) \n    leftMotor=sim.getObjectHandle("bubbleRob_leftMotor") \n    rightMotor=sim.getObjectHandle("bubbleRob_rightMotor") \n    noseSensor=sim.getObjectHandle("bubbleRob_sensingNose") \n    minMaxSpeed={120*math.pi/180,300*math.pi/180} \n    backUntilTime=-1 \n   \n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*1\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor) \n    \n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end \n\n    if (backUntilTime<sim.getSimulationTime()) then\n        \n        sim.setJointTargetVelocity(leftMotor,speed)\n        sim.setJointTargetVelocity(rightMotor,speed)\n    else\n        \n        sim.setJointTargetVelocity(leftMotor,-speed/5)\n        sim.setJointTargetVelocity(rightMotor,-speed/200)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n 路徑Lua: \n require(\'graph_customization\') \n 力傳感器Lua: \n function sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_init()\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend \n 視覺傳感器Lua: \n function sysCall_init()\nend\n\nfunction sysCall_vision(inData)\n    -- callback function automatically added for backward compatibility\n    -- (vision sensor have no filters anymore, but rather a callback function where image processing can be performed)\n    local retVal={}\n    retVal.trigger=false\n    retVal.packedPackets={}\n    simVision.sensorImgToWorkImg(inData.handle)\n    simVision.edgeDetectionOnWorkImg(inData.handle,0.200000)\n    simVision.workImgToSensorImg(inData.handle,false)\n    return retVal\nend\n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '第二次報告 \n 影片 :\xa0 \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': '利用python程式讀取  stage3_2a.txt ，建立 Stage3 的分組倉儲，分組網頁，以及各組員倉儲及網頁連結。 \n 程式與註解如下 : \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("123.txt") as fh:\n    #匯入txt檔內容.將它命名為fh\n    data = fh.readlines()\n     #readlines()方法讀取整個檔案所有行，儲存在一個列表(list)變數中，每行作為一個元素。\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n     #因為有一個學號少打了一個0，所以使用replace() ，將正確學號取代錯誤學號，並傳回data。\n    data = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in data]\n     #有一組只有6人，因此需消除後面多的2格空格。\n    data = [b.replace(\'_\',\'-\') for b in data]\n     #將_更改成-以方便之後的讀取。\n     #print(data)\n     #印出data。\n#print(len(data))\nfor i in range(len(data)):\n    # 使用range設定範圍，len(data)=6進行for迴圈，變數為i。\n    group = data[i].rstrip("\\n").split("\\t")\n    #將data列表中第i項,去除元素\\n(換行)利用\\t(空格)分割變成元素(逗號自動補上)\n    \n    #group（）用來提出分組截獲的字符串，()用來分組。\n    #rstrip() 删除 string 字符串末尾的指定字符。\n    #split() 通過指定分隔符對字符串進行切片，如果参数 num 有指定值，則分隔 num+1 個子字符串。\n    \n    #print(group)\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0]+\'">網站</a> | <a href="https://github.com/\'+group[2]+\'/\'+group[0]+\'">倉儲</a></p>\')\n    #group[0][9]=第0個第9位\n    #用print依序索引group list中的元素,放入html格式,依序print出來\n \n    for j in range(2,18,2):\n        #range(2,18,2):選取文字檔中的第2格到第18格，每跳兩格選一次\n        try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[j]+\'.github.io/\'+group[0]+\'">\'+group[j]+\'</a></p>\')\n            #用print依序索引group list中的元素,放入html格式,依序print出來\n                   #差別在於這行是取組員的但因為有一組只有6人超出範圍所以一定會error\n        except:\n            continue \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '使用 Python remote API 進行操控 stage1 與 stage2 所完成的 coppeliasim 場景 \n YT : \n \n \n Python remote API 程式 stage 1 \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,boat_motor_handle=vrep.simxGetObjectHandle(clientID,\'boat_motor\',vrep.simx_opmode_oneshot_wait)\n \nif errorCode == -1:\n    print(\'Can not find motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,boat_motor_handle,0, vrep.simx_opmode_oneshot_wait) \n Python remote API 程式 stage 2 \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,left_m_handle=vrep.simxGetObjectHandle(clientID,\'left_m\',vrep.simx_opmode_oneshot_wait)\n \nerrorCode,right_m_handle=vrep.simxGetObjectHandle(clientID,\'right_m\',vrep.simx_opmode_oneshot_wait)\n \nif errorCode == -1:\n    print(\'Can not find left or right motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,left_m_handle,0, vrep.simx_opmode_oneshot_wait)\nerrorCode=vrep.simxSetJointTargetVelocity(clientID,right_m_handle,0, vrep.simx_opmode_oneshot_wait)\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'W11', 'text': 'W11 直播影片 : \n 介紹使用\xa0 Python remote API 控制 coppeliasim 場景，與SSH 設定。 \n', 'tags': '', 'url': 'W11.html'}]};
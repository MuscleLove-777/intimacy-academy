/* ============================================
   インティマシーアカデミー - Level 1: 魅力と出会い
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "魅力と出会い",
    icon: "✨",
    description: "恋愛における魅力の科学と出会いの作り方",
    modules: [

        {
            id: 101,
            title: "恋愛の心理学入門",
            duration: "10分",
            content: `
<h2>💘 恋愛の心理学入門</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>恋愛は感情だけでなく、<strong>脳内の化学反応</strong>と<strong>心理的メカニズム</strong>が大きく関わっています。科学的な視点を持つことで、より健全な関係を築けます。</p>
</div>

<h3>🧠 恋愛の3つの脳内物質</h3>

<div class="visual-box">
<div class="visual-box-title">恋愛のケミストリー</div>
<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#FCE4EC;border:2px solid #E91E63;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">⚡</div>
<div style="font-weight:700;">ドーパミン</div>
<div style="font-size:0.8rem;color:#666;">快感・興奮・報酬<br>「もっと会いたい！」</div>
</div>
<div style="background:#F3E5F5;border:2px solid #9C27B0;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">💕</div>
<div style="font-weight:700;">オキシトシン</div>
<div style="font-size:0.8rem;color:#666;">絆・信頼・安心<br>「一緒にいると落ち着く」</div>
</div>
<div style="background:#E8EAF6;border:2px solid #3F51B5;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">🌙</div>
<div style="font-weight:700;">セロトニン</div>
<div style="font-size:0.8rem;color:#666;">安定・幸福感<br>恋愛初期は低下→執着</div>
</div>
</div>
</div>

<h3>📊 恋愛の3段階</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>欲望（Lust）</strong>
性ホルモン（テストステロン・エストロゲン）が駆動。身体的な魅力に惹かれる段階。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>魅了（Attraction）</strong>
ドーパミンが大量放出。相手のことばかり考える。食欲減退・不眠も。通常6ヶ月〜2年。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>愛着（Attachment）</strong>
オキシトシン・バソプレッシンが主役。深い絆と安心感。長期的な関係の基盤。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 「恋は盲目」は本当</div>
<p>恋愛初期（魅了段階）では前頭前皮質の活動が低下し、<strong>判断力が鈍ります</strong>。相手の欠点が見えにくくなるため、重要な決断（同棲・結婚など）は冷静な時期に行いましょう。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>恋愛は<strong>ドーパミン・オキシトシン・セロトニン</strong>が関与</li>
<li><strong>欲望→魅了→愛着</strong>の3段階で進む</li>
<li>初期の熱狂は一時的。<strong>愛着段階</strong>の深い絆が長期関係の鍵</li>
</ul>
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "恋愛初期に「相手のことばかり考えてしまう」のに関与する脳内物質はどれですか？", options: ["オキシトシン", "ドーパミン", "セロトニン", "アドレナリン"], answer: 1, explanation: "ドーパミンは快感と報酬に関わる物質で、恋愛初期に大量放出され「もっと会いたい」という衝動を生みます。" },
                { id: "q101_2", type: "choice", question: "長期的な関係の安定に最も重要な恋愛の段階はどれですか？", options: ["欲望（Lust）", "魅了（Attraction）", "愛着（Attachment）", "すべて同じ"], answer: 2, explanation: "愛着段階はオキシトシンによる深い絆と安心感に基づき、長期的な関係の基盤となります。" },
            ]
        },

        {
            id: 102,
            title: "魅力を高める要素",
            duration: "10分",
            content: `
<h2>✨ 魅力を高める要素</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>魅力は生まれ持ったものだけではありません。研究で実証された<strong>後天的に高められる魅力</strong>を知りましょう。</p>
</div>

<h3>🔬 研究で実証された魅力の要素</h3>

<div class="visual-box">
<div class="visual-box-title">魅力を構成する5つの要素</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:15px 0;">
<div style="background:#FCE4EC;border:2px solid #E91E63;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🧹</div>
<div style="font-weight:700;font-size:0.85rem;">清潔感</div>
<div style="font-size:0.75rem;color:#666;">最も基本的で<br>最も重要</div>
</div>
<div style="background:#F3E5F5;border:2px solid #9C27B0;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">😊</div>
<div style="font-weight:700;font-size:0.85rem;">笑顔・表情</div>
<div style="font-size:0.75rem;color:#666;">温かさと<br>親しみやすさ</div>
</div>
<div style="background:#E8EAF6;border:2px solid #3F51B5;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🗣</div>
<div style="font-weight:700;font-size:0.85rem;">会話力</div>
<div style="font-size:0.75rem;color:#666;">聴く力と<br>ユーモア</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">💪</div>
<div style="font-weight:700;font-size:0.85rem;">自信</div>
<div style="font-size:0.75rem;color:#666;">自己肯定感と<br>余裕</div>
</div>
<div style="background:#FFF3E0;border:2px solid #FF9800;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🎯</div>
<div style="font-weight:700;font-size:0.85rem;">情熱</div>
<div style="font-size:0.75rem;color:#666;">何かに打ち込む<br>姿は魅力的</div>
</div>
</div>
</div>

<h3>📈 すぐに実践できること</h3>

<table>
<tr><th>要素</th><th>今日からできること</th></tr>
<tr><td>清潔感</td><td>身だしなみチェック習慣を作る。匂いに気を配る</td></tr>
<tr><td>笑顔</td><td>鏡の前で笑顔の練習。人と会ったらまず笑顔</td></tr>
<tr><td>会話力</td><td>相手の話を聴く。質問で会話を広げる</td></tr>
<tr><td>自信</td><td>小さな成功体験を積む。姿勢を正す</td></tr>
<tr><td>情熱</td><td>好きなことに没頭する時間を作る</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">🔑 魅力の公式</div>
<p><strong>魅力 = 外見 × 内面 × コミュニケーション</strong></p>
<p>外見が平均的でも、内面とコミュニケーション力が高ければ総合的な魅力は大きく上がります。逆に外見が優れていても、内面やコミュニケーションが伴わなければ長期的な魅力は低下します。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>魅力は<strong>後天的に高められる</strong></li>
<li><strong>清潔感</strong>が最も基本かつ重要</li>
<li>何かに<strong>情熱を持って打ち込む姿</strong>は非常に魅力的</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "研究で最も基本的かつ重要とされる魅力の要素はどれですか？", options: ["高い収入", "清潔感", "ブランド品", "筋肉"], answer: 1, explanation: "清潔感は性別・文化を問わず最も基本的な魅力の要素です。" },
                { id: "q102_2", type: "choice", question: "魅力の公式として正しいのはどれですか？", options: ["魅力 = 外見のみ", "魅力 = 外見 × 内面 × コミュニケーション", "魅力 = お金 × ステータス", "魅力 = 生まれ持ったもの"], answer: 1, explanation: "魅力は外見・内面・コミュニケーションの掛け算です。一つが低くても他でカバーできます。" },
            ]
        },

        {
            id: 103,
            title: "出会いの場と機会の作り方",
            duration: "10分",
            content: `
<h2>🌐 出会いの場と機会の作り方</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>「出会いがない」のではなく、<strong>出会いに気づいていない・行動していない</strong>ことがほとんどです。環境を変えれば出会いは増えます。</p>
</div>

<h3>📊 出会いの場の比較</h3>

<table>
<tr><th>方法</th><th>メリット</th><th>注意点</th></tr>
<tr><td>趣味・習い事</td><td>共通の話題がある。自然に仲良くなれる</td><td>異性目的だけで参加しない</td></tr>
<tr><td>友人の紹介</td><td>信頼のフィルターがある</td><td>断るとき気まずい場合も</td></tr>
<tr><td>マッチングアプリ</td><td>効率的。目的が明確</td><td>プロフィール詐称に注意</td></tr>
<tr><td>職場・学校</td><td>日常的に接触できる</td><td>リスク管理が必要</td></tr>
<tr><td>イベント・パーティ</td><td>多くの人と一度に会える</td><td>表面的になりやすい</td></tr>
</table>

<h3>📱 マッチングアプリのコツ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>プロフィール写真</strong>
自然な笑顔の写真を使う。自撮りより他撮り。趣味がわかる写真も追加。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>プロフィール文</strong>
具体的な趣味・好きなこと・デートでしたいことを書く。ネガティブなことは書かない。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>メッセージ</strong>
プロフィールを読んだ上で質問する。定型文は送らない。早めに実際に会う提案をする。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 安全のために</div>
<ul>
<li>初デートは<strong>昼間の公共の場所</strong>で</li>
<li>友人に<strong>行き先を伝えておく</strong></li>
<li>個人情報は<strong>信頼できるまで教えない</strong></li>
<li>違和感を感じたら<strong>すぐに離れる</strong></li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>出会いは<strong>自分から環境を作る</strong></li>
<li>マッチングアプリは<strong>写真・プロフィール・メッセージ</strong>が鍵</li>
<li><strong>安全対策</strong>を必ず行う</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "マッチングアプリでの初デートとして最も適切なのはどれですか？", options: ["夜の居酒屋で長時間", "昼間の公共の場所で短時間", "相手の自宅", "旅行"], answer: 1, explanation: "初デートは安全のため昼間の公共の場所が最適です。短時間でお互いの雰囲気を確認しましょう。" },
            ]
        },

        {
            id: 104,
            title: "デートの組み立て方",
            duration: "10分",
            content: `
<h2>🍽 デートの組み立て方</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>良いデートは<strong>「二人で楽しい時間を共有する」</strong>ことが目的です。高級レストランより、一緒に楽しめる体験が大切です。</p>
</div>

<h3>📐 デートプランの基本構造</h3>

<div class="visual-box">
<div class="visual-box-title">デートの3ステップ構成</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>① メインアクティビティ</strong><br>
<span style="font-size:0.85rem;">一緒に体験を共有する。水族館、カフェ巡り、料理教室など。</span>
</div>
<div style="background:#F3E5F5;border-left:4px solid #9C27B0;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>② 食事・カフェ</strong><br>
<span style="font-size:0.85rem;">落ち着いて会話できる場所。向かい合いより横並びの方が距離が近くなる。</span>
</div>
<div style="background:#E8EAF6;border-left:4px solid #3F51B5;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>③ 散歩・移動</strong><br>
<span style="font-size:0.85rem;">歩きながらの会話はリラックスして話しやすい（横並び効果）。</span>
</div>
</div>
</div>

<h3>🔬 デートの心理学テクニック</h3>

<table>
<tr><th>テクニック</th><th>効果</th><th>例</th></tr>
<tr><td>吊り橋効果</td><td>ドキドキを恋愛感情と錯覚</td><td>ホラー映画・遊園地・スポーツ</td></tr>
<tr><td>横並び効果</td><td>対面より親密さが増す</td><td>カウンター席・散歩・ドライブ</td></tr>
<tr><td>ピークエンドの法則</td><td>最も盛り上がった時と最後の印象で全体を判断</td><td>最後の別れ際を丁寧に</td></tr>
<tr><td>自己開示の返報性</td><td>自分から開くと相手も開く</td><td>少しパーソナルな話をする</td></tr>
</table>

<h3>🎯 デート回数別の目安</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>1回目：お互いを知る</strong>
カフェやランチで1〜2時間。話しやすい環境で相性確認。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>2〜3回目：一緒に楽しむ</strong>
共通の趣味に関するアクティビティ。少し長めのデート。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>4〜5回目：距離を縮める</strong>
プライベートな話題も増える。気持ちの確認に向けた段階。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>デートは<strong>共有体験</strong>が最も効果的</li>
<li><strong>横並び効果</strong>で自然に距離を縮める</li>
<li><strong>ピークエンドの法則</strong>：最後の別れ際が全体の印象を決める</li>
</ul>
</div>
`,
            quiz: [
                { id: "q104_1", type: "choice", question: "デートで自然に距離を縮めやすいのはどの座席配置ですか？", options: ["対面で座る", "横並びで座る", "斜め向かい", "離れた席"], answer: 1, explanation: "横並び効果により、対面より横並びの方がリラックスして親密さが増しやすいです。" },
                { id: "q104_2", type: "choice", question: "ピークエンドの法則によると、デート全体の印象を最も左右するのは？", options: ["デートの開始直後", "デート中の会話量", "最も盛り上がった瞬間と最後の別れ際", "デートの長さ"], answer: 2, explanation: "ピークエンドの法則では、体験の「ピーク（最も強い感情）」と「エンド（最後）」が全体の印象を決めます。" },
            ]
        },
    ]
};
